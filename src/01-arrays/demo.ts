import { PhysicalTherapyTracker } from "./physical-therapy-tracker";

const tracker = new PhysicalTherapyTracker();

tracker.addEntry({
  date: "2026-02-26",
  exercise: "glute bridge",
  painLevel: 3,
  mobility: 7
});

tracker.addEntry({
  date: "2026-03-01",
  exercise: "dead bug",
  painLevel: 2,
  mobility: 8
});

tracker.addEntry({
  date: "2026-03-04",
  exercise: "bird dog",
  painLevel: 4,
  mobility: 6
});

console.log("Average pain:", tracker.getAveragePain());
console.log("Best mobility day:", tracker.getBestMobilityDay());
console.log("Worst pain day:", tracker.getWorstPainDay());