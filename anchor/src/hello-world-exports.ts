// Here we export some useful types and functions for interacting with the Anchor program.
import type { HelloWorld } from '../target/types/hello-world';
import { IDL as HelloWorldIDL } from '../target/types/hello-world';
import { Program } from '@coral-xyz/anchor';

// Re-export the generated IDL and type
export { HelloWorld, HelloWorldIDL };
export type HelloWorldProgram = Program<HelloWorld>;
