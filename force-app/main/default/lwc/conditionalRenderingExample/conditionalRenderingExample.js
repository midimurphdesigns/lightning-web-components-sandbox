import { LightningElement, track } from "lwc";

export default class ConditionalRenderingExample extends LightningElement {
  @track displayDiv = false;

  cityList = ["Jaipur", "bangluru", "Hyderabad", "Mumbai"];

  showDivHandler(event) {
    this.displayDiv = event.target.checked;
  }
}
