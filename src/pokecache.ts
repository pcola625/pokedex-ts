//
//  pokecache.ts
//
//
//  Created by Pete Colasacco on 2/23/26.
//

export type CacheEntry<T> = {
    createdAt: number;
    val: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;
    
    constructor(interval: number) {
            this.#interval = interval;
            this.#startReapLoop();
    };
    
    add<T>(key: string, val: T) {
        const cacheEntry: CacheEntry<T> = { createdAt: Date.now() , val: val };
        this.#cache.set(key, cacheEntry);
    };
    
    get<T>(key: string) {
        const entry = this.#cache.get(key);
        if (entry !== undefined) {
            return entry.val as T;
        } else {
            return undefined;
        }
    };
    
    #reap() {
        for (const [key, entry] of this.#cache) {
            if (entry.createdAt < Date.now() - this.#interval) {
                this.#cache.delete(key);
            }
        }
    };
        
    #startReapLoop() {
    
        this.#reapIntervalId = setInterval( ()=> {this.#reap();} , this.#interval);
            
    };
        
    stopReapLoop() {
        if (this.#reapIntervalId) {
            clearInterval(this.#reapIntervalId);
            this.#reapIntervalId = undefined;
        }
    };
        
}
