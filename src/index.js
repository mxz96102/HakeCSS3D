import Box from 'box';
import Camera from 'camera';
import Color from 'color';
import Plane from 'plane';
import Skybox from 'skybox';
import Sprite from 'sprite';
import Stage from 'stage';
import TObject from 'TObject';
import Orienter from 'orienter';

export default class HakeCSS3D {
  constructor() {
    this.__version = '0.0.2';
    this.color = Color;
    this.Object = TObject;
    this.Sprite = Sprite;
    this.Camera = Camera;
    this.Box = Box;
    this.Plane = Plane;
    this.Skybox = Skybox;
    this.Stage = Stage;
    this.Orienter = Orienter;
  }
}
