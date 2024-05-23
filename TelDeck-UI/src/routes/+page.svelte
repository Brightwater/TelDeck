<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>




<script lang="ts">

    import { onMount } from 'svelte';

    // make onmount function ( not a lambda )
    onMount(async () => {
        
    });

    let allSensorData: MonitorData[] = [];

    async function fetchSensorData() {
        try {
            const response = await fetch('');
            const jsonData = await response.text();
            allSensorData = JSON.parse(jsonData);

            // sensorDataArray = parsedData.map((data) => {
            // return new MonitorData(
            //     data.SensorApp,
            //     data.SensorClass,
            //     data.SensorName,
            //     data.SensorValue,
            //     data.SensorUnit,
            //     data.SensorUpdateTime
            // );
            // });

            // Process the updated sensor data array
            console.log(allSensorData);
        } catch (error) {
            // Handle any errors that occur during the fetch
            console.error(error);
        }
    }

    console.log("TEST")
    setInterval(fetchSensorData, 1000);
</script>