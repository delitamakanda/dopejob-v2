# dope job app
app for job finding in django framework

## requirements
* python3
* django 2

set virtual environement with virtualenv with python3 support:

```bash
python3 -m venv dopejobv2
```

for mac users
```bash
source dopejobv2/bin/activate
```

for windows users
```bash
.\dopejobv2\Scripts\activate
```

install packages for django
```bash
pip install -r requirements-dev.txt
```

create a config file .env in your root folder, same level than manage.py with the content below
```text
SECRET_KEY=dummy_secret_key
DEBUG=True
OTHER_VARIABLE=variable_1
```

Migrate models to db via orm
```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

Run local server
```bash
python3 manage.py runserver
```

Run celery
```bash
celery -A project worker -l info
```

# commands
```
python3 manage.py import_job_title_from_onisep_as_xml
```

```
python3 manage.py import_cursus_from_datagouv_as_xls data/cursus.xls
```

```
python3 manage.py import_faculty_from_datagouv_as_json
```
