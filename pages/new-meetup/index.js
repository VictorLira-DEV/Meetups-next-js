// our-meetup.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";

function NewMeetupPage() {
	const router = useRouter();

	async function addMeetupHandler(enteredMeetupData) {
		const response = await fetch("/api/new-meetup", {
			method: "POST",
			body: JSON.stringify(enteredMeetupData),
			headers: {
				"Content-type": "application/json",
			},
		});

		const data = await response.json();
		router.replace("/");
	}

	return (
		<React.Fragment>
			<Head>
				<title> Add a New Meetup </title>
				<meta
					name="description"
					content="Add your own meetups and create amazing opportunities"
				/>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</React.Fragment>
	);
}
export default NewMeetupPage;
