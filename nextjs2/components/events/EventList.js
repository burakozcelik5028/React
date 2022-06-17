import EventItem from "./EventItem";
import classes from "./EventItem.module.css";

function EventList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
          id={item.id}
          description={item.description}
        />
      ))}
    </ul>
  );
}

export default EventList;
