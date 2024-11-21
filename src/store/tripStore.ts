import { create } from "zustand";

interface PointType {
  icon: React.ReactNode;
  label: string;
}

interface Point {
  point: string;
  type: PointType;
}

interface TripState {
  tripTitle: string;
  points: Point[];
  setTripTitle: (title: string) => void;
  addPoint: (point: Point) => void;
  editPoint: (index: number, newPoint: Point) => void;
  removePoint: (index: number) => void;
}

export const useTripStore = create<TripState>((set) => ({
  tripTitle: "",
  points: [],
  setTripTitle: (title: string) => set({ tripTitle: title }),
  addPoint: (point: Point) =>
    set((state: TripState) => ({
      points: [...state.points, point],
    })),
  editPoint: (index: number, newPoint: Point) =>
    set((state: TripState) => {
      const updatedPoints = [...state.points];
      updatedPoints[index] = newPoint;
      return { points: updatedPoints };
    }),
  removePoint: (index: number) =>
    set((state: TripState) => {
      const updatedPoints = state.points.filter((_, i) => i !== index);
      return { points: updatedPoints };
    }),
}));
