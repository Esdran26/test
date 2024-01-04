const fetchUsers = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        console.log(data.results)
        const firstThreeCharacters = data.results.slice(0, 3);

       setDates(firstThreeCharacters);
    } catch (error) {
        throw error;
    }
}

export default fetchUsers;