<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('player_evaluations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('coach_id')->constrained('users');
            $table->foreignId('player_id')->constrained('players');

            $table->text('evaluation_text');

            $table->vector('embedding', 1536)->nullable();

            $table->tinyInteger('nota_geral')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('player_evaluations');
    }
};
