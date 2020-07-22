<?php

namespace App\Repositories\Contact;

interface ContactInterface
{

    public function getAll();
    public function create(array $attributes);
    public function update($id, array $attributes);
    public function delete($id);
}
