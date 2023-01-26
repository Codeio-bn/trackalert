<p align="center"><a href="https://codeio.nl" target="_blank"><img src="https://codeio.nl/img/Logo-transparent.png" width="400" alt="Codeio Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## TrackAlert

Laravel is a safety screen system used for indoor karting tracks.

## Setting up TrackAlert Development envoirment

This project runs on Docker, so install [Docker Desktop](https://www.docker.com/products/docker-desktop)
(if you haven't already) and start this application by executing the following command in your terminal:

```
$ composer install
```

Now you can run your install command (TrackAlert uses [Laravel Sail](https://laravel.com/docs/9.x/sail)) with:

```
$ php artisan sail:install
```

Spin up the container and you're good to go.

```
$ ./vendor/bin/sail up
```

## Configuration
Copy the `.env` file to `.env.[client_name]` (or create a new one) and set the credentials and optionally custom values for vars.
