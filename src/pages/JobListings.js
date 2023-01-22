import React from 'react';
import Hero from '../components/Hero';
import ListingFilter from '../components/ListingFilter';

export default function JobListings() {
  return (
    <>
      <Hero heroType="plain" />
      <ListingFilter />
    </>
  );
}
