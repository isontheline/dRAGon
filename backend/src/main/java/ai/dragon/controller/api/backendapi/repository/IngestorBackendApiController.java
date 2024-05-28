package ai.dragon.controller.api.backendapi.repository;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonMappingException;

import ai.dragon.entity.IngestorEntity;
import ai.dragon.repository.IngestorRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/backendapi/repository/ingestor")
@Tag(name = "Ingestor Repository", description = "Ingestor Repository Management API Endpoints")
public class IngestorBackendApiController extends AbstractCrudBackendApiController<IngestorEntity> {
    @Autowired
    private IngestorRepository ingestorRepository;

    @GetMapping("/")
    @ApiResponse(responseCode = "200", description = "List has been successfully retrieved.")
    @Operation(summary = "List all Ingestors", description = "Returns all Ingestor entities stored in the database.")
    public List<IngestorEntity> list() {
        return super.list(ingestorRepository);
    }

    @PostMapping("/")
    @ApiResponse(responseCode = "200", description = "Ingestor has been successfully created.")
    @Operation(summary = "Create a new Ingestor", description = "Creates one Ingestor entity in the database.")
    public IngestorEntity create() throws Exception {
        return super.create(ingestorRepository);
    }

    @GetMapping("/{uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}}")
    @ApiResponse(responseCode = "200", description = "Ingestor has been successfully retrieved.")
    @ApiResponse(responseCode = "404", description = "Ingestor not found.", content = @Content)
    @Operation(summary = "Retrieve one Ingestor", description = "Returns one Ingestor entity from its UUID stored in the database.")
    public IngestorEntity get(
            @PathVariable("uuid") @Parameter(description = "Identifier of the Ingestor") String uuid) {
        return super.get(uuid, ingestorRepository);
    }

    @PatchMapping("/{uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}}")
    @ApiResponse(responseCode = "200", description = "Ingestor has been successfully created.")
    @ApiResponse(responseCode = "404", description = "Ingestor not found.", content = @Content)
    @Operation(summary = "Update a Ingestor", description = "Updates one Ingestor entity in the database.")
    public IngestorEntity update(
            @PathVariable("uuid") @Parameter(description = "Identifier of the Ingestor", required = true) String uuid,
            @RequestBody Map<String, Object> fields) throws JsonMappingException {
        return super.update(uuid, fields, ingestorRepository);
    }

    @DeleteMapping("/{uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}}")
    @ApiResponse(responseCode = "200", description = "Ingestor has been successfully deleted.")
    @ApiResponse(responseCode = "404", description = "Ingestor not found.", content = @Content)
    @Operation(summary = "Delete a Ingestor", description = "Deletes one Ingestor entity from its UUID stored in the database.")
    public void delete(@PathVariable("uuid") @Parameter(description = "Identifier of the Ingestor") String uuid) {
        super.delete(uuid, ingestorRepository);
    }
}