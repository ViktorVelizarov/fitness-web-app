import { FilterProps } from "@/types";

export async function fetchPlan(filters: FilterProps) {
    const { time, equipment, muscle, fitness_level, fitness_goals } = filters;

    const url = 'https://workout-planner1.p.rapidapi.com/customized?time=30&equipment=dumbbells&muscle=biceps&fitness_level=beginner&fitness_goals=strength';
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '609812722cmshc530c4bfaae0383p1ec266jsnfaa60a0bd882',
        'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
    }
    };

    const response = await fetch(
        `https://workout-planner1.p.rapidapi.com/customized?time=${time}&equipment=${equipment}&muscle=${muscle}&fitness_level=${fitness_level}&fitness_goals=${fitness_goals}`
        , options
    );
    // Parse the response as JSON
    const result = await response.json();
    return result;
}