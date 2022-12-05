class RepositoryItemNotFoundError extends Error {
  static code = "RepositoryItemNotFound";
  code: string;
  id: string;
  source: string;

  constructor(id: string, source: string) {
    super("Could not find item with ID: " + id + " in " + source);
    this.id = id;
    this.source = source;
    this.code = RepositoryItemNotFoundError.code;
  }
}

export default RepositoryItemNotFoundError;
