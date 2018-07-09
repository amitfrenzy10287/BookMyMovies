import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { MovieShows } from './MovieShows';
import MovieLists from '../../components/Movies/MovieList/MovieLists';

configure({adapter: new Adapter()});

describe('<MovieShows />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<MovieShows onInitMovies={() => {}}/>);
    });

    it('should render <MovieLists /> when receiving movies', () => {
        wrapper.setProps({movies: {movie_id: 1}});
        expect(wrapper.find(MovieLists)).toHaveLength(1);
    });
});