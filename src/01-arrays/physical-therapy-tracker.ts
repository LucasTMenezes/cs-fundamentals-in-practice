export type ExerciseEntry = {
    date: string
    exercise: string
    painLevel: number
    mobility: number
}

export class PhysicalTherapyTracker {
    private entries: ExerciseEntry[] = []

    addEntry(entry: ExerciseEntry) {
        this.entries.push(entry)
    }

    getEntries() {
        return this.entries
    }

    getAveragePain(): number {
        let sum = 0;

        for(const entry of this.entries) {
            sum += entry.painLevel
        };

        return sum / this.entries.length
    }

    getBestMobilityDay(): ExerciseEntry | null {
        if (this.entries.length === 0) return null;

        let best = this.entries[0];

        for (const entry of this.entries) {
            if (entry.mobility > best.mobility) {
                best = entry
            }
            
        };

        return best
    }

    getWorstPainDay(): ExerciseEntry | null {
        if (this.entries.length === 0) return null;

        let worst = this.entries[0];

        for(const entry of this.entries) {
            if (entry.painLevel > worst.painLevel) {
                worst = entry
            }
        };

        return worst
    }
}
