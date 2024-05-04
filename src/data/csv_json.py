import csv
import json
import time

def csv_to_json(csv_file):
    json_data = {}

    with open(csv_file, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            for key, value in row.items():
                if key not in json_data:
                    json_data[key] = []
                json_data[key].append(value)

    return json_data

if __name__ == "__main__":
    csv_file_path = 'src/data/data.csv'  # Replace with your CSV file path

    while True:
        json_data = csv_to_json(csv_file_path)

        with open('src/data/data.json', 'w') as json_file:
            json.dump(json_data, json_file, indent=4)

        time.sleep(5)  # Wait for 5 seconds before checking for modifications
