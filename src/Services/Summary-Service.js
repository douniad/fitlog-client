import config from '../config'
import TokenService from './Token-Service'

const SummaryService = {
    postSummary(summary) {
      return fetch(`${config.API_ENDPOINT}/summaries`, {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${TokenService.getAuthToken()}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify(summary),
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
}

export default SummaryService