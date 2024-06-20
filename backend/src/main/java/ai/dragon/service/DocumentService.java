package ai.dragon.service;

import org.dizitart.no2.collection.events.CollectionEventInfo;
import org.dizitart.no2.filters.FluentFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ai.dragon.entity.DocumentEntity;
import ai.dragon.entity.SiloEntity;
import ai.dragon.listener.EntityChangeListener;
import ai.dragon.repository.DocumentRepository;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;

@Service
public class DocumentService {
    private EntityChangeListener<DocumentEntity> entityChangeListener;

    @Autowired
    private DocumentRepository documentRepository;

    @Autowired
    private EmbeddingStoreService embeddingStoreService;

    @PostConstruct
    private void init() {
        entityChangeListener = documentRepository.subscribe(new EntityChangeListener<DocumentEntity>() {
            @Override
            public void onChangeEvent(CollectionEventInfo<?> collectionEventInfo, DocumentEntity entity) {
                switch (collectionEventInfo.getEventType()) {
                    case Remove:
                        // TODO Remove embedding
                        break;
                    default:
                        break;
                }
            }
        });
    }

    @PreDestroy
    private void destroy() {
        documentRepository.unsubscribe(entityChangeListener);
    }

    public void removeDocumentsOfSilo(SiloEntity entity) throws Exception {
        documentRepository.findWithFilter(FluentFilter.where("siloIdentifier").eq(entity.getUuid()))
                .forEach(document -> {
                    documentRepository.delete(document);
                });
        clearEmbeddingsOfSilo(entity);
    }

    private void clearEmbeddingsOfSilo(SiloEntity entity) throws Exception {
        embeddingStoreService.clearEmbeddingStore(entity.getUuid());
    }
}
