//Streams become hady in nodejs whenever there's a need to process large files for the sake of using data inside them.
//some of the streams are: Writable, Readable, Duplex, Transform. Streams also extend EventEmitter class, which means that streams also have the functionality of handling events.

//Why streams are required? variables have their max size in nodejs to process data, generates error whenever trying to access large files, try this in the example of fs-sync.js file

//Solution to this would be using stream
