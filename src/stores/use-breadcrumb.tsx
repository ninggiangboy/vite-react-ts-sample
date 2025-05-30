import { create } from "zustand";

export type BreadcrumbItem = {
  path?: string;
  name: string;
};

type BreadcrumbState = {
  items: BreadcrumbItem[];
};

type BreadcrumbActions = {
  setBreadcrumb: (items: BreadcrumbItem[]) => void;
  clearBreadcrumb: () => void;
  addBreadcrumb: (item: BreadcrumbItem) => void;
  removeBreadcrumb: (path: string) => void;
};

const initialState: BreadcrumbState = {
  items: [],
};

export const useBreadcrumb = create<BreadcrumbState & BreadcrumbActions>()(
  (set) => ({
    ...initialState,

    // Actions
    setBreadcrumb: (items) => set({ items }),

    clearBreadcrumb: () => set(initialState),

    addBreadcrumb: (item) =>
      set((state) => ({
        items: [...state.items, item],
      })),

    removeBreadcrumb: (path) =>
      set((state) => ({
        items: state.items.filter((item) => item.path !== path),
      })),
  })
);
