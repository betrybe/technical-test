<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    protected $searchable = [];

    public function searchable()
    {
        return $this->searchable;
    }
}
