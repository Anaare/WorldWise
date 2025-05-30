import Spinner from "../components/Spinner";
import CityItem from "../components/CityItem";
import Message from "../components/Message";
import { useCities } from "../contexts/CitiesContext";
import styles from "./CityList.module.css";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
