import 'reflect-metadata'
import {Config} from '../yaml/config'
import {Member} from '../resources/member'
import {RepositoryCollaborator} from '../resources/repository-collaborator'
import { Repository, Visibility } from '../resources/repository'

async function run(): Promise<void> {
  const config = Config.FromPath()

  const privateRepositoryNames = config.getResources(Repository).filter(repository => {
    return repository.visibility === Visibility.Private && !repository.archived
  }).map(repository => repository.name)
  const memberUsernames = config.getResources(Member).map(member => member.username)
  const repositoryCollaborators = config.getResources(RepositoryCollaborator).filter(collaborator => {
    return privateRepositoryNames.includes(collaborator.repository) && !memberUsernames.includes(collaborator.username)
  })
  console.log(repositoryCollaborators.length)
}

run()
