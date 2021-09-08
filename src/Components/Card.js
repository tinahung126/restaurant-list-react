import React from 'react'
import dummyData from '../dummyData/restaurants'
import './Card.css'

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = { restaurants: dummyData }
  }

  handleFollowing (restaurant) {
    this.setState({
      restaurants: this.state.restaurants.map((item) => {
        if (item.id === restaurant.id) {
          if (item.isFollowed === true) {
            item.isFollowed = false
            item.follower--
          } else {
            item.isFollowed = true
            item.follower++
          }
        }
        return item
      })
    })
  }

  render () {
    return (
      this.state.restaurants.map((restaurant) => {
        return (
          <div className='col-xl-3 col-lg-4 col-sm-6 col-12' key={restaurant.id}>
            <div className='card mb-3 '>
              <img
                className='card-img-top'
                src={restaurant.image}
                alt={restaurant.title}
              />
              <div className='card-body'>
                <h5 className='card-title'>{restaurant.title}</h5>
                <h6 className='card-subtitle my-2'>{restaurant.detail}</h6>
              </div>
              <div className='card-body d-flex justify-content-between align-items-center '>
                <span>{restaurant.follower} 人在追蹤</span>
                <button
                  className={`btn dark px-6 ${restaurant.isFollowed ? 'followed' : ''}`} style={{ color: 'white' }} onClick={() => this.handleFollowing(restaurant)}
                >{restaurant.isFollowed ? '追蹤中' : '追蹤'}
                </button>
              </div>
            </div>
          </div>
        )
      })

    )
  }
}
export default Card
