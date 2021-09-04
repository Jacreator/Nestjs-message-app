export interface RepositoryInterface {
  findOne(id: string);
  findAll();
  create(contents: string);
}
