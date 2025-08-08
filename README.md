# MMM-DailyBibleVerse

A MagicMirror² module that displays a daily Bible verse.

## Installation

1. Clone this repository into your MagicMirror `modules` folder:
   ```bash
   git clone https://github.com/shotgun45/MMM-DailyBibleVerse.git
   ```
2. Add the module to your `config.js`:
   ```js
   {
     module: "MMM-DailyBibleVerse",
     position: "top_left", // or any region
     config: {
       // No config options required
     }
   }
   ```

## Configuration Options

| Option          | Description                        | Default                |
|-----------------|------------------------------------|------------------------|
| updateInterval  | How often to update the verse (ms) | 86400000 (24 hours)    |
| apiUrl          | API endpoint for Bible verses      | see below              |

- `apiUrl` default: `https://labs.bible.org/api/?passage=random&type=json`

## License
MIT
