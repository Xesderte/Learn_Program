import styles from "./App.module.css"
import Alert from "./comoponents/Alert/Alert"
import Form from "./comoponents/Form/Form"
import Spinner from "./comoponents/Spinner/Spinner"
import WeatherDetail from "./comoponents/WeatherDetail/WeatherDetail"
import useWeather from "./hooks/useWeather"

function App() {

  const {weather, loading, notFound, fetchWeather, hasWeatherData} = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {loading && <Spinner/>}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert> Ciudad No Encontrada</Alert>}
      </div>
    </>
  )
}

export default App
