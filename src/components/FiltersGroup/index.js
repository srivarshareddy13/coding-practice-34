import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const renderRatingsFilterList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)

      return (
        <li key={rating.ratingId} onClick={onClickRatingItem}>
          <img src={rating.imageUrl} alt={`rating ${rating.ratingId}`} />
          <p>& up</p>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => (
    <div>
      <h1>Rating</h1>
      <ul>{renderRatingsFilterList()}</ul>
    </div>
  )

  const renderCategoryList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {changeCategory} = props
      const onClickCategoryItem = () => changeCategory(category.categoryId)

      return (
        <li key={category.categoryId} onClick={onClickCategoryItem}>
          <p>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductsCategories = () => (
    <>
      <h1>Category</h1>
      <ul>{renderCategoryList()}</ul>
    </>
  )

  const OnEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div>
        <input
          value={searchInput}
          type="search"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={OnEnterSearchInput}
        />
        <BsSearch />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div>
      {renderSearchInput()}
      {renderProductsCategories()}
      {renderRatingsFilters()}
      <button type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
