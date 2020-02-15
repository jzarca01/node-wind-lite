# node-wind-lite

An API for Wind bikes and boards

_This is the lite version of [node-wind](https://github.com/jzarca01/node-wind)_

## Usage

```javascript
const Wind = require('node-wind-lite');
const wind = new Wind();
```

## Methods

### Get boards (scooters) nearby

```javascript
await wind.getBoardsNearby({
  latitude,
  longitude
});
```

**When you're not logged in, you can only see the 3 nearest boards**

### Get bikes nearby

```javascript
await wind.getBikesNearby({
  latitude,
  longitude
});
```

**When you're not logged in, you can only see the 3 nearest bikes**

### Get parking ports nearby

```javascript
await wind.getParkingPortsNearby({
  latitude,
  longitude
});
```

### Get operating countries

```javascript
await wind.getOperatingCountries();
```

### Get operating areas

```javascript
await wind.getOperatingAreas();
```
