import axios from "axios";
import { useState, useEffect } from "react";
import Country from "./components/Country";
import { CountryType } from "./types";
import Loading from "./components/Loading";

const App = () => {
    const [countries, setCountries] = useState<CountryType[]>([]);
    const [loading, setLoading] = useState<boolean>(false)

    const getCountries = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get<CountryType[]>("https://restcountries.com/v2/all");
            setCountries(data);
        } catch (error) {
            console.log("error");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getCountries();
    }, [])

    console.log(countries);

    return (
        <div>
            <Loading loading={loading}>
                {countries.map(country => {
                    return (
                        <Country key={country.name} country={country} />
                    )
                })}
            </Loading>

        </div>
    )
}
export default App