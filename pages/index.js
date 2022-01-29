import MeetupList from "../components/meetups/MeetupList";
import React from "react";

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
	return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context){
// 	// this function will run on the server after deployment
// 	// we still can fetch data from API
// 	// when you need access the requests
// 	// then you need the requests every second or more
// 	const req = context.req;
// 	const res = context.rest;

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS
// 		}
// 	}
// }

//Static site generation SSG
//this is for data fetching
export async function getStaticProps() {
	//this data fetching executes during the Build process
	//Next js will wait for this promisse to resolve
	//getStaticProps is reserved name
	//this function only works in pages files
	//always return this object

	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
		revalidate: 3600, //number of seconds
	};
}

export default HomePage;
