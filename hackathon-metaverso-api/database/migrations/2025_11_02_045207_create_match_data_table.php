<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('match_data', static function (Blueprint $table) {
            $table->id();
            $table->jsonb('match_info')->nullable();
            $table->jsonb('players')->nullable();
            $table->jsonb('round_results')->nullable();
            $table->timestamps();
            $table->index(['match_info'], 'match_info_jsonb_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('match_data');
    }
};
