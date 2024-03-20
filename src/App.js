import {Component} from 'react'
import './App.css'

// This is the list (static data) used in the application. You can move it to any component if needed.

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

// Replace your code here
class App extends Component {
  state = {
    countriesList: initialCountriesList,
    visitedCountries: [initialCountriesList[3], initialCountriesList[8]],
  }

  updateVisitedCountries = obj => {
    const {countriesList, visitedCountries} = this.state
    const updatedCountries = countriesList.map(eachObj => {
      if (eachObj.id === obj.id) {
        return {...eachObj, isVisited: true}
      }
      return eachObj
    })

    this.setState({
      countriesList: updatedCountries,
      visitedCountries: [...visitedCountries, obj],
    })
  }

  updateCountries = id => {
    const {countriesList, visitedCountries} = this.state
    const updatedCountries = countriesList.map(eachObj => {
      if (eachObj.id === id) {
        return {...eachObj, isVisited: false}
      }
      return eachObj
    })

    const updatedVisitedCountries = visitedCountries.filter(
      eachObj => eachObj.id !== id,
    )

    this.setState({
      countriesList: updatedCountries,
      visitedCountries: updatedVisitedCountries,
    })
  }

  render() {
    const {countriesList, visitedCountries} = this.state
    const showVisitedCountries = visitedCountries.length > 0

    return (
      <div className="app-cont">
        <div className="countries-cont">
          <h1>Countries</h1>
          <ul className="countries-list">
            {countriesList.map(eachObj => {
              const onClickVisit = () => {
                this.updateVisitedCountries(eachObj)
              }

              return (
                <li key={eachObj.id} className="country-item">
                  <p>{eachObj.name}</p>
                  {eachObj.isVisited ? (
                    <p className="v-text">Visited</p>
                  ) : (
                    <button
                      type="button"
                      onClick={onClickVisit}
                      className="butt"
                    >
                      Visit
                    </button>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="visited-countries-cont">
          <h1>Visited Countries</h1>
          {showVisitedCountries ? (
            <ul className="v-countries-list">
              {visitedCountries.map(eachObj => {
                const onClickRemove = () => {
                  this.updateCountries(eachObj.id)
                }

                return (
                  <li key={eachObj.id} className="v-country-item">
                    <img
                      src={eachObj.imageUrl}
                      alt="thumbnail"
                      className="flag-pic"
                    />
                    <div className="name-remove-cont">
                      <p>{eachObj.name}</p>
                      <button
                        type="button"
                        onClick={onClickRemove}
                        className="r-butt"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
          ) : (
            <div className="nvc-cont">
              <p>No Countries Visited Yet!</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
