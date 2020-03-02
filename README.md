[![Apache License](https://img.shields.io/badge/license-Apache%202.0-orange.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Dependencies](https://david-dm.org/JelteMX/mendix-vertical-timeline.svg)]([https://david-dm.org/JelteMX/mendix-vertical-timeline](https://david-dm.org/JelteMX/mendix-vertical-timeline))
[![DevDependencies](https://david-dm.org/JelteMX/mendix-vertical-timeline/dev-status.svg)]([https://david-dm.org/JelteMX/mendix-vertical-timeline?type=dev](https://david-dm.org/JelteMX/mendix-vertical-timeline?type=dev))
[![Support](https://img.shields.io/badge/Support-Community%20(no%20active%20support)-orange.svg)](https://docs.mendix.com/developerportal/app-store/app-store-content-support)
![WM](https://img.shields.io/badge/Webmodeler%20compatible-NO-red.svg)
[![Studio](https://img.shields.io/badge/Studio%20version-8.7%2B-blue.svg)](https://appstore.home.mendix.com/link/modeler/)
[![GitHub release](https://img.shields.io/github/release/JelteMX/mendix-vertical-timeline)](https://github.com/JelteMX/mendix-vertical-timeline/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/JelteMX/mendix-vertical-timeline)](https://github.com/JelteMX/mendix-vertical-timeline/issues)
[![Available](https://img.shields.io/badge/Test%20Project-available-green.svg)](https://github.com/JelteMX/widget-test-projects)

# Vertical Timeline

![logo](/assets/AppStoreIcon.png)

Want to show a vertical timeline in your Mendix App? These pluggable widgets (**Mendix 8.7 and higher**) will help you accomplish that.

![screenshot](/assets/screenshot.png)

> See it in action [here](https://pluggabletimeline-sandbox.mxapps.io/)

> Extremely light widgets, totalling about 10Kb when running in the cloud

## Features

### Container
- Show a vertical timeline, with a datasource you can choose
- Make it 1- or 2-column
- Supports conditional visibility

### Element
- Onclick icon
- Model the content of your Timeline Element in Mendix Studio
- Supports conditional visibility

## Usage

This setup involves 2 widgets that work together:

![setup](/assets/setup.png)

- Add the **Vertical Timeline Container** to your page
- Select a Datasource for the container. This will automatically set the context for the content field of the container
- Add the **Vertical Timeline Element** inside the container
- Inside the element, you can model out how you want it to look
- If you want to style it quickly (the background is grey), add the following class name to the container **_surrounding_** the Vertical Timeline Container: `vertical-timeline-wrapper`

The following things can be configured:

- **Date** : this is a string that will be shown on the opposite of the element, or underneath
- **Icon** : this is the icon that appears inside the round
- **Icon class** : If you are going to do some styling, you might want to set the class based on a textTemplate
- **OnClick Icon** : When you click the icon itself, you can open a page, execute nanoflow/microflow etc.

## Configuration

### Container

![container1](/assets/container1.png)
![container2](/assets/container2.png)

### Element

![element1](/assets/element1.png)

## Demo project

Demo project will be released later, but this is very simple.

## Issues, suggestions and feature requests

> **Note 1 (29/02/2020)**: Due to limitations, pluggable widgets that have content panes, do not accept other widgets like data views in their panes. This is currently a PLATFORM limitation, do not report this as an issue.

Please report your issues [here](https://github.com/JelteMX/mendix-vertical-timeline/issues)

## License

Apache 2
