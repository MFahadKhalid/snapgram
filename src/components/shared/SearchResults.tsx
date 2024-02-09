import { Models } from 'appwrite'
import React from 'react'
import Loader from '@/components/shared/Loader';
import GridPostList from './GridPostList';


type SearchResultsProps = {
    isSearchingFetching: boolean,
    searchedPosts: Models.Document[];
}
 

const SearchResults = ({ isSearchingFetching, searchedPosts }: SearchResultsProps) => {
    if(isSearchingFetching) return <Loader />
    if(searchedPosts && documents.length > 0) {
        return (
            <GridPostList posts={searchedPosts.documents} />
        )
    }
  return (
    <p className='text-light-4 mt-10 text-center w-full'>No results found</p>
  )
}

export default SearchResults