package ai.dragon.properties.loader;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class FileSystemIngestorLoaderSettings {
    public static final String DEFAULT_PATH_MATCHER = "glob:**.{txt,pdf,doc,docx,ppt,pptx,xls,xlsx}";

    private String path;
    private String pathMatcher;
    private boolean recursive;

    public FileSystemIngestorLoaderSettings() {
        recursive = false;
        pathMatcher = DEFAULT_PATH_MATCHER;
    }
}
