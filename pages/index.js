import MeetupList from "../components/meetups/MeetupList";
import React, { useEffect, useState } from 'react'

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A First Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
		address: "Some address 5, 12345 Some city",
		description: "This is a first meet up!",
	},
	{
		id: "m2",
		title: "A Second Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
		address: "Some address 12, 4444 Some city",
		description: "This is a Second meet up!",
	},
];

export function HomePage(props) { 

	return <MeetupList meetups={props.meetups} />
}

//Static site generation SSG
export async function getStaticProps(){
	//Next js will wait for this promisse to resolve
	//getStaticProps is reserved name
	//this function only works in pages files
	//always retun thi object

	//this data fetching executes during the Buil process
	return {
		props: {
			meetups: DUMMY_MEETUPS
		}
	}
}

export default HomePage;
