package ai.dragon.listener;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Profile;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;

@Component
@Profile("!test")
public class StartupApplicationListener implements ApplicationListener<ContextRefreshedEvent> {
    @Autowired
    private ServletWebServerApplicationContext webServerAppCtxt;

    @Override
    public void onApplicationEvent(@NonNull ContextRefreshedEvent event) {
        String scheme = "http";
        String host = "localhost";
        int port = webServerAppCtxt.getWebServer().getPort();

        System.out.println("================================================");
        System.out.println(String.format("APP URL\t\t : %s://%s:%d/", scheme, host, port));
        System.out.println(String.format("Swagger UI\t : %s://%s:%d/api/swagger-ui.html", scheme, host, port));
        System.out.println("================================================");
    }
}
