// Define types for sidebar items and sub-items
export interface SubItem {
    name: string;
    href: string;
    icon?: React.ComponentType; // Icon component type for dynamic rendering
    position?: boolean;
    bottom?: number;
  }