class MonitorData {
    SensorApp: string;
    SensorClass: string;
    SensorName: string;
    SensorValue: string;
    SensorUnit: string;
    SensorUpdateTime: number;

    constructor(
        sensorApp: string,
        sensorClass: string,
        sensorName: string,
        sensorValue: string,
        sensorUnit: string,
        sensorUpdateTime: number
    ) {
        this.SensorApp = sensorApp;
        this.SensorClass = sensorClass;
        this.SensorName = sensorName;
        this.SensorValue = sensorValue;
        this.SensorUnit = sensorUnit;
        this.SensorUpdateTime = sensorUpdateTime;
    }
}