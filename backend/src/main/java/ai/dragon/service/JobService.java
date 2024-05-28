package ai.dragon.service;

import org.jobrunr.jobs.Job;
import org.jobrunr.jobs.RecurringJob;
import org.jobrunr.storage.JobNotFoundException;
import org.jobrunr.storage.RecurringJobsResult;
import org.jobrunr.storage.StorageProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobService {
    private RecurringJobsResult recurringJobsResult;

    @Autowired
    private StorageProvider storageProvider;

    public void onApplicationStartup() {
        this.triggerRecurringJob(IngestorService.INGESTOR_RECURRING_JOB_ID);
    }

    public void triggerRecurringJob(String id) {
        final RecurringJob recurringJob = recurringJobResults()
                .stream()
                .filter(rj -> rj.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new JobNotFoundException(id));

        final Job job = recurringJob.toEnqueuedJob();
        storageProvider.save(job);
    }

    private RecurringJobsResult recurringJobResults() {
        if (recurringJobsResult == null
                || storageProvider.recurringJobsUpdated(recurringJobsResult.getLastModifiedHash())) {
            recurringJobsResult = storageProvider.getRecurringJobs();
        }
        return recurringJobsResult;
    }
}
