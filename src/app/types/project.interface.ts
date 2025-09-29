import { ProjectData } from './project-data.interface';
import { ImageData } from './image-data.interface';

export interface Project extends ProjectData {
  imageData: ImageData[];
  areFeaturesCollapsed: boolean;
}