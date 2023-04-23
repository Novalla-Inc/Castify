/**
 * This file exports the fallback (en-US) locale dictonary to
 * an object that is compiled into our bundle. This Allows
 * use to do small bundle updates that add new strings to
 * the dictionary, and have those strings availible immediately. 
 * All other locals are shipped with the main app container and are
 * loaded at runtime.
 * 
 * Any new local files should be registered here or they will not function
 * properly.
 */

const fallbackDictionary = {
    ...require('./en-US/app.json')
};

export default fallbackDictionary;