import { action, observable } from 'mobx'
import Axios from 'utils/Axios'

const getURL = (organization, repository) => {
  return `/repos/${organization}/${repository}/issues`
}

export default class Model {
  @observable data = []

  @action
  async fetch(organization, repository) {
    this.data.replace([])

    const { data } = await Axios.get(getURL(organization, repository))

    this.data.replace(data)
  }

  @action
  async fetchById(organization, repository, issueNumber) {
    const issuesUrl = getURL(organization, repository)
    const { data } = await Axios.get(`${issuesUrl}/${issueNumber}`)

    this.issuesMap.set(`${organization}/${repository}/${issueNumber}`, data)
  }

  getById(organization, repository, issueNumber) {
    const key = `${organization}/${repository}/${issueNumber}`

    return this.issuesMap.get(key)
  }
}
