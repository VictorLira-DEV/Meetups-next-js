import MeetupList from "../components/meetups/MeetupList";

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

export default function HomePage() {
	return <MeetupList meetups={DUMMY_MEETUPS} />
}
