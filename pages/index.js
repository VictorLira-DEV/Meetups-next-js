import MeetupList from "../components/meetups/MeetupList";
import React from "react";
import { MongoClient } from "mongodb";

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

	const client = await MongoClient.connect(
		"mongodb+srv://victor-lira:parafernalha@meetups-cluster.1ooeu.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();
	const meetupsCollection = db.collection("meetups");
	const meetups = await meetupsCollection.find().toArray();
	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 3600, //number of seconds
	};
}

export default HomePage;
