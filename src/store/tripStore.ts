import { create } from "zustand";

const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

interface PointType {
  icon: React.ReactNode;
  label: string;
}

export interface Point {
  id: string;
  point: string;
  type: PointType;
}

interface TripState {
  tripTitle: string;
  points: Point[];
  setTripTitle: (title: string) => void;
  addPoint: (point: Omit<Point, "id">) => void;
  editPoint: (id: string, newPoint: Point) => void;
  removePoint: (id: string) => void;
}

export const useTripStore = create<TripState>((set) => ({
  tripTitle: "",
  points: [],
  setTripTitle: (title: string) => set({ tripTitle: title }),
  addPoint: (point: Omit<Point, "id">) =>
    set((state: TripState) => {
      const newPoint = { ...point, id: generateUUID() };
      return { points: [...state.points, newPoint] };
    }),
  editPoint: (id: string, newPoint: Point) =>
    set((state: TripState) => {
      const updatedPoints = state.points.map((point) =>
        point.id === id ? { ...point, ...newPoint } : point
      );
      return { points: updatedPoints };
    }),
  removePoint: (id: string) =>
    set((state: TripState) => {
      const updatedPoints = state.points.filter((point) => point.id !== id);
      return { points: updatedPoints };
    }),
}));
