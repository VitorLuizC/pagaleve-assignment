/**
 * Merges the properties of two objects together, but overwrites the properties
 * of the first object if they are present in the second.
 */
type MergeAndOverwrite<A extends {}, B extends {}> = Omit<A, keyof B> & B;

export default MergeAndOverwrite;
