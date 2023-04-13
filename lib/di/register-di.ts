import 'reflect-metadata'
import { container } from "tsyringe"
import { KanjiPostRepository, KanjiPostStaticPathRepository, 
         KanjiSubjectRepository, KanjiSubjectStaticPathRepository } from "lib/repository";
import { IJPostClient, IJPostStaticPathClient, IJSubjectClient, IJSubjectStatiPathClient } from "lib/type";

export function registerDI(){
    container.register(IJPostClient, {
        useClass: KanjiPostRepository
    });
      
    container.register(IJPostStaticPathClient, {
    useClass: KanjiPostStaticPathRepository
    });
    
    container.register(IJSubjectClient, {
    useClass: KanjiSubjectRepository
    });
    
    container.register(IJSubjectStatiPathClient, {
    useClass: KanjiSubjectStaticPathRepository
    });
}